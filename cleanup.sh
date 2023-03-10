#!/bin/bash

# Get the list of ignored files
IGNORED_FILES=$(git ls-files --others --ignored --exclude-standard)

# Remove each ignored file
for FILE in $IGNORED_FILES; do
  rm -rf $FILE
done

# Remove empty directories
find . -type d -empty -delete