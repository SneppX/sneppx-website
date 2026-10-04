# sneppx-website

Static marketing site (HTML/CSS). Serve locally to preview.

## Build & Test

- Python: per-file pytest only (full-suite collection may hang):
  `python -m pytest tests/ -q` per file, or `python -m pytest tests/test_x.py -q`.
- No CUDA/GPU assumptions; CPU + NumPy only.
- No CI/CD workflow files (user policy); verify locally.
