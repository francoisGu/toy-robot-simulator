import * as dotenv from 'dotenv';
import fs from 'fs';
import readline from 'readline';
import Simulator from './repository/simulator';

dotenv.config();

/**
 * Get the file path in the environment variable
 * Read the file line by line and process the commands
 * @param file location of the file with all commands
 */
export const cli = (file: string = process.env.COMMANDS_FILE): boolean => {
    const simulator = new Simulator();
    if (fs.existsSync(file)) {
        const rd = readline.createInterface({
            input: fs.createReadStream(file),
        });
        rd.on('line', (line: string) => {
            simulator.process(line);
        });
        return true;
    }
    return false;
};

cli();
