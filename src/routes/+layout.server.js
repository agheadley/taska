export const prerender = false;

export const load = async (event) => {
    return {
      session: await event.locals.getSession(),
    }
  }