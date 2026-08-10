import { readdirSync } from 'node:fs';

const scopes = ['apps', 'lib'].flatMap((root) => {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => {
      return entry.isDirectory();
    })
    .map((entry) => {
      return entry.name;
    });
});

export default {
  scopes,
  allowCustomScopes: true,
  allowEmptyScopes: true,
  useEmoji: false,
  skipQuestions: ['body', 'breaking', 'breakingBody', 'footerPrefix', 'footer', 'confirmCommit'],
  messages: {
    type: 'Type of commit:',
    scope: 'Scope:',
    customScope: 'Scope:',
    subject: 'Commit message:',
  },
};
