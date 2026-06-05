#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import https from "https";

const program = new Command();

const REPO_BASE_URL =
  "https://raw.githubusercontent.com/manishpatel00/Error404-UI/main/components/404";

const componentsList = [
  { title: "Simple Page", value: "SimplePage" },
  { title: "Modern Page", value: "ModernPage" },
  { title: "Stranger Things", value: "StrangerThings" },
  { title: "Terminal", value: "Terminal" },
  { title: "Snow", value: "Snow" },
  { title: "Among Us", value: "AmongUs" },
  { title: "Stone Age", value: "StoneAge" },
  { title: "Retro TV", value: "RetroTv" },
  { title: "Blue Glitch", value: "BlueGlitch" },
  { title: "Poet", value: "Poet" },
  { title: "Particles", value: "Particles" },
  { title: "Mac OS", value: "MacOs" },
  { title: "Google", value: "Google" },
  { title: "Geeks for Geeks", value: "GeeksforGeeks" },
  { title: "Vercel", value: "Vercel" },
  { title: "Bug Game", value: "BugGame" },
  { title: "Void", value: "Void" },
];

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve();
          });
        } else {
          fs.unlink(dest, () => {});
          reject(
            new Error(`Failed to download ${url}: ${response.statusCode}`),
          );
        }
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

program
  .name("error404")
  .description("Add beautiful 404 error pages to your React/Next.js project")
  .version("1.0.0");

program
  .command("add")
  .description("Add a 404 component to your project")
  .argument("[component]", "The name of the component to add")
  .action(async (componentArg) => {
    let component = componentArg;

    if (!component) {
      const response = await prompts({
        type: "select",
        name: "component",
        message: "Which 404 component would you like to add?",
        choices: componentsList,
      });
      component = response.component;
    } else {
      const match = componentsList.find(
        (c) => c.value.toLowerCase() === component.toLowerCase(),
      );
      if (match) {
        component = match.value;
      } else {
        console.log(chalk.red(`\nComponent "${component}" not found.`));
        process.exit(1);
      }
    }

    if (!component) {
      console.log(chalk.yellow("\nOperation cancelled."));
      process.exit(0);
    }

    const targetDir = path.join(process.cwd(), "components", "404");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, `${component}.tsx`);
    const fileUrl = `${REPO_BASE_URL}/${component}.tsx`;

    console.log(chalk.blue(`\nDownloading ${component}.tsx...`));

    try {
      await downloadFile(fileUrl, filePath);
      console.log(
        chalk.green(`\n✔ Successfully added ${component} to ${filePath}`),
      );
      console.log(
        chalk.white(
          `\nNote: Make sure to install any required dependencies (e.g., framer-motion, lucide-react) if the component uses them.\n`,
        ),
      );
    } catch (err: any) {
      console.log(
        chalk.red(`\n✖ Failed to download component: ${err.message}`),
      );
    }
  });

program.parse();
