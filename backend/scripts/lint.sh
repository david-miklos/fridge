#!/usr/bin/env bash

set -e
set -x

ruff check app --fix
