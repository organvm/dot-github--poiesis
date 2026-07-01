#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2).filter((arg) => arg !== '--coverage');

const result = spawnSync(
  process.execPath,
  ['--test', 'tests/workflow-template-ci.test.js', ...args],
  {
    stdio: 'inherit',
  },
);

process.exit(result.status ?? 0);
