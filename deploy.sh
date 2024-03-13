#!/bin/bash

echo "Running Git Add ."
git add .

echo "Running Git Commit"
git commit -m "temp commit"

echo "Running Git Push"
git push origin main

echo "Deploying pages"
npm run deploy