const t = {
  contents: [
    { id: 'th0u2gfgcka1' },
    { id: '84v2psigyy91' },
    { id: 'f0mjgn_1x4bi' },
    { id: '8ufymgipp' },
    { id: 'n_4wgumu6ur' },
    { id: 'n9i18f176e6' },
    { id: 'svhlvxlv9cz' },
    { id: '0-4tths_9z' },
    { id: 'g-1tr8n3p-d' },
    { id: 'bqmzxszwvga' },
  ],
  totalCount: 10,
  offset: 0,
  limit: 10,
};

const getStaticPaths = () => {
  const res = t;
  let paths: {
    params: { page: string };
  }[] = [];
  for (let i = 1; i < t.contents.length; i++) {
    paths.push({ params: { page: i.toString() } });
  }
  return paths;
};

console.log(getStaticPaths());
