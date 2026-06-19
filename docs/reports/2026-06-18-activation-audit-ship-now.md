# Activation Audit: Ship Now - 2026-06-18

Issue: GH #6

## Scope

Activation pass for the actually-live `organvm-ii-poiesis/.github` meta
repository. This repository is the organization-level GitHub configuration
surface for ORGAN-II: Poiesis.

Inputs reviewed:

- Community health files: `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`,
  `SECURITY.md`, `SUPPORT.md`, `FUNDING.yml`
- Active meta-repo templates under `.github/`
- Inherited issue and pull request templates under `ISSUE_TEMPLATE/` and
  `PULL_REQUEST_TEMPLATE/`
- Workflow templates under `workflow-templates/`
- Public organization profile at `profile/README.md`
- Automation contract at `seed.yaml`

## Shipped Changes

1. Root README now identifies this repository as `organvm-ii-poiesis/.github`
   and records the issue #6 activation-audit verdict.
2. Inherited community health files and issue templates no longer point
   contributors at the retired prior organization.
3. Workflow-template metadata now presents ORGAN-II labels for reusable CI and
   release workflows.
4. `seed.yaml` now records `actually-live` frozen state, `ship-now` verdict,
   the passing live-profile render test, and this audit report path.

## Remaining Gated Items

No code or infrastructure blockers were found for this ship-now pass.

Operational follow-ups, if desired, are outside this issue:

- Confirm whether ORGAN-II organization Discussions should be enabled.
- Decide whether the legacy root-level `ISSUE_TEMPLATE/` mirror should remain
  alongside the active `.github/ISSUE_TEMPLATE/` templates.

## Verification

Passed:

- `profile/README.md` is present and is the organization profile source for
  [github.com/organvm-ii-poiesis](https://github.com/organvm-ii-poiesis).
- Required community health files, issue templates, PR templates, workflow
  templates, and `seed.yaml` are present in the repository.
- `seed.yaml` parses as YAML.
- No retired prior-organization references remain in tracked text files.
- `git diff --check`

Verdict: ship now. The repository is already live as the ORGAN-II GitHub
configuration surface, and the local metadata now matches that public state.
