export default {
  async fetch(request: Request, env: any) {
    return new Response('Hello world');
  },
  async scheduled(event: ScheduledEvent, env: any, ctx: any) {
    console.log(event.scheduledTime);
    await initKV(event, env);
  },
};

const initKV = async (event: ScheduledEvent, env: any) => {
  // 時間を記録
  const me: KVNamespace = env.ME;
  const date = new Date().toISOString();
  await me.put('lastExecution', date);
  console.log(await me.get('test'));
};

/* async function handleScheduled(event: ScheduledEvent) {
  let lastExecution = await MY_KV_NAMESPACE.get('lastExecution');

  // 仕事をする
  // 例: APIをフェッチする、データベースを更新する、メールを送信するなど

  await MY_KV_NAMESPACE.put('lastExecution', new Date().toISOString());
} */
