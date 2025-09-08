import base from './sv.json';

export default {
  ...base,
  trusted: {
    ...(base as any).trusted,
    title: 'Framtidens digitala lösningar',
    subtitle: 'Företag från olika branscher väljer oss för att driva sin digitala utveckling.'
  }
};
