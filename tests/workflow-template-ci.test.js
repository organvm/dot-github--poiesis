import assert from 'node:assert';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

function loadCiWorkflowYaml(filePath) {
  const rubyLoader = spawnSync(
    'ruby',
    [
      '-r',
      'yaml',
      '-r',
      'json',
      '-e',
      'require "yaml"; require "json"; data = YAML.load_file(ARGV[0]); puts JSON.generate(data)',
      filePath,
    ],
    {
      encoding: 'utf8',
    },
  );

  if (rubyLoader.status !== 0) {
    throw new Error(`YAML parse failed for ${filePath}: ${rubyLoader.stderr}`);
  }

  return JSON.parse(rubyLoader.stdout);
}

const ciWorkflow = loadCiWorkflowYaml(
  path.join(process.cwd(), 'workflow-templates', 'ci.yml'),
);

const jobs = ciWorkflow.jobs;

test('CI workflow parses and exposes expected top-level structure', () => {
  assert.strictEqual(ciWorkflow.name, 'CI');
  const hasEventMap = ciWorkflow.on !== undefined || ciWorkflow[true] !== undefined;
  assert.ok(hasEventMap);
  assert.ok(jobs.lint);
  assert.ok(jobs.test);
  assert.ok(jobs.build);
  assert.ok(jobs.security);
});

test('CI workflow pins and reuses primary Node version', () => {
  assert.deepStrictEqual(ciWorkflow.env, {
    NODE_VERSION_PRIMARY: '20.x',
  });
  assert.strictEqual(
    jobs.lint.steps[1].uses,
    'actions/setup-node@v4',
  );
  assert.deepStrictEqual(jobs.lint.steps[1].with, {
    'node-version': '${{ env.NODE_VERSION_PRIMARY }}',
    cache: 'npm',
  });
  assert.deepStrictEqual(
    jobs.test.strategy.matrix['node-version'],
    ['20.x', '22.x'],
  );
});

test('CI workflow runs lint and coverage validation commands', () => {
  const lintRunSteps = jobs.lint.steps.map((step) => step.run).filter(Boolean);
  assert.ok(lintRunSteps.includes('npm run lint'));
  assert.ok(lintRunSteps.includes('npm run format:check'));

  const testRunSteps = jobs.test.steps.map((step) => step.run).filter(Boolean);
  assert.ok(testRunSteps.includes('npm test -- --coverage'));
});

test('CI workflow requires artifacts and security checks in expected order', () => {
  assert.strictEqual(jobs.build.needs, 'test');
  const buildRunStep = jobs.build.steps.find((step) => step.run?.startsWith('npm run build'));
  assert.ok(buildRunStep);
  assert.strictEqual(buildRunStep.name, 'Build');
  assert.strictEqual(
    jobs.security.steps[jobs.security.steps.length - 1].run,
    'npm audit --audit-level=high',
  );
});
