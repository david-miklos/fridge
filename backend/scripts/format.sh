#!/bin/sh -e
set -x

poetry run ruff format app
