class DASHBOARD {
  private root = '/i';

  HOME = this.root;
  TASKS = `${this.root}/tasks`;
  HABITS = `${this.root}/habits`;
  TIMER = `${this.root}/timer`;
  TIME_BLOCKING = `${this.root}/time-blocking`;
  SETTING = `${this.root}/settings`;
}

export const DASHBOARD_PAGES = new DASHBOARD();
