import base from './sv.json';

export default {
  ...base,
  trusted: {
    ...(base as any).trusted,
    title: 'Framtidens digitala lÃ¶sningar',
    subtitle: 'FÃ¶retag frÃ¥n olika branscher vÃ¤ljer oss fÃ¶r att driva sin digitala utveckling.'
  }
};