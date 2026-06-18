# organvm-ii-poiesis/.github

Organization-level GitHub configuration for **ORGAN-II: Poiesis**.

## Purpose

This repository contains default community health files, templates, workflow templates, and the public organization profile for repositories in the `organvm-ii-poiesis` organization.

## Activation Status

| Field | Value |
|-------|-------|
| Frozen-state classification | `actually-live` |
| Ship-now verdict | `PASS` |
| Shipped test | `profile/README.md` renders live at [github.com/organvm-ii-poiesis](https://github.com/organvm-ii-poiesis) |
| Audit issue | [organvm-ii-poiesis/.github#6](https://github.com/organvm-ii-poiesis/.github/issues/6) |

## Contents

| Path | Purpose |
|------|---------|
| `profile/README.md` | Organization profile displayed on [github.com/organvm-ii-poiesis](https://github.com/organvm-ii-poiesis) |
| `CODE_OF_CONDUCT.md` | Community standards and expected behavior |
| `CONTRIBUTING.md` | Guidelines for contributing code, docs, research, and art |
| `SECURITY.md` | Security policy and vulnerability reporting |
| `SUPPORT.md` | How to get help and community resources |
| `FUNDING.yml` | Sponsorship and funding links |
| `.github/ISSUE_TEMPLATE/` | Active issue templates for this meta repository |
| `ISSUE_TEMPLATE/` | Inherited issue-template source for ORGAN-II repositories |
| `.github/PULL_REQUEST_TEMPLATE.md` | Active pull request template for this meta repository |
| `PULL_REQUEST_TEMPLATE/` | Inherited pull request-template source for ORGAN-II repositories |
| `workflow-templates/` | Reusable GitHub Actions workflows |
| `seed.yaml` | Automation contract for ORGANVM orchestration |

## How It Works

GitHub automatically uses these files for any repository in the organization that does not have its own version:

1. **Community health files** (`CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, etc.) — appear in the "Community" section of each repo
2. **Issue templates** — available when creating new issues in any org repo
3. **PR templates** — auto-populate when opening pull requests
4. **Workflow templates** — appear under Actions -> "Workflows created by organvm-ii-poiesis"

## Customization

To override any file for a specific repository:
1. Create the same file in that repository's `.github/` directory
2. The repo-specific file takes precedence

## Workflow Templates

Available workflow templates:

| Template | Description |
|----------|-------------|
| `ci.yml` | Standard CI: lint, test (Node 20.x/22.x), build, security audit |
| `release.yml` | Tag-triggered GitHub release workflow with changelog generation |

To use in a repository:
1. Go to Actions tab
2. Click "New workflow"
3. Select from "Workflows created by organvm-ii-poiesis"

## Local Development

```bash
# Clone this repository
git clone https://github.com/organvm-ii-poiesis/.github.git
cd .github

# Make changes
# ...

# Commit and push
git add .
git commit -m "chore: update community files"
git push origin main
```

## Links

- [Organization Profile](https://github.com/organvm-ii-poiesis)
- [ORGAN-II Docs](https://github.com/organvm-ii-poiesis/docs)
- [System Documentation](https://github.com/meta-organvm/organvm-corpvs-testamentvm)

## License

MIT License. See individual repositories for their specific licenses.
