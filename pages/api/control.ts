// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

const ALLOWED_ACTIONS = ["shutdown", "restart"];
const ACTION_COMMANDS: { [key: string]: string } = {
  shutdown: "shutdown now",
  restart: "shutdown -r now",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { action } = req!.body;

  if (!action || !ALLOWED_ACTIONS.includes(action)) {
    res.status(400).end();
  }

  await exec(ACTION_COMMANDS[action], (error, stdout, stderr) => {
    if (error) {
      console.log(`error ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  res.status(200).end();
}
