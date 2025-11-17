# Release Instructions

This document explains how to publish a new version of emoji-styler to PyPI and GitHub Releases.

## Prerequisites

1. **PyPI Account Setup**
   - Create account at https://pypi.org
   - Generate API token at https://pypi.org/manage/account/token/
   - Add token to GitHub secrets as `PYPI_API_TOKEN`:
     - Go to: Settings → Secrets and variables → Actions
     - Click "New repository secret"
     - Name: `PYPI_API_TOKEN`
     - Value: Your PyPI token (starts with `pypi-`)

2. **Alternative: Trusted Publishing (Recommended)**
   - Configure at https://pypi.org/manage/account/publishing/
   - No token needed - more secure!
   - Add publisher: `ruslanlap/emoji-styler` with workflow `publish.yml`

## Release Process

### 1. Update Version

Edit version in `pyproject.toml`:
```toml
[project]
name = "emoji-styler"
version = "0.2.0"  # ← Update this
```

### 2. Update Changelog

Add release notes to `README.md` or create `CHANGELOG.md`

### 3. Commit Changes

```bash
git add pyproject.toml
git commit -m "Bump version to 0.2.0"
git push
```

### 4. Create and Push Tag

```bash
git tag v0.2.0
git push origin v0.2.0
```

### 5. Automatic Publishing

The GitHub Action will automatically:
- ✅ Build the package
- ✅ Run tests
- ✅ Create GitHub Release with artifacts
- ✅ Publish to PyPI

### 6. Verify

- Check GitHub Releases: https://github.com/ruslanlap/emoji-styler/releases
- Check PyPI: https://pypi.org/project/emoji-styler/
- Test installation: `pip install emoji-styler --upgrade`

## Manual Publishing (if needed)

```bash
# Build
python -m build

# Check
twine check dist/*

# Upload to TestPyPI (optional)
twine upload --repository testpypi dist/*

# Upload to PyPI
twine upload dist/*
```

## Version Numbering

Follow semantic versioning (semver):
- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backwards compatible
- **Patch** (0.0.1): Bug fixes, backwards compatible

Examples:
- `v0.1.0` - Initial release
- `v0.1.1` - Bug fix
- `v0.2.0` - New emoji style added
- `v1.0.0` - Stable API release
