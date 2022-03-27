import { readFile, writeFile } from 'fs/promises'

class MessageRepository {
  async findOne (id: string) {
    const contentsRaw = await readFile('messages.json', 'utf-8');
    const content = JSON.parse(contentsRaw);
    return content[id];
  }

  async findAll () {
    const contents = await readFile("messages.json", "utf-8");
    const messages = JSON.parse(contents);
    return messages;
  }

  async create (content: string) {
    const contents = await readFile("messages.json", "utf-8");
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile("messages.json", messages);
  }
}