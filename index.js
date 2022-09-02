#!/usr/bin/env node
import { readPackage } from "read-pkg";
import { execaSync } from "execa";

const { author } = await readPackage();

try {
  if (author && author.name && author.email) {
    execaSync("git", ["config", "user.name", author.name]);
    execaSync("git", ["config", "user.email", author.email]);
    console.log("set git user", author.name, author.email);
  } else {
    console.log("please set package.json author: name & email");
  }
} catch {}
