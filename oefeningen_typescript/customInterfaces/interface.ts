// export makes this file a module, so the second one also needs export and won't apply globally

export interface Employee {
  name: string;
  age: number;
  salaris?: number;
}

export interface Manager extends Employee {
  teamsize: number;
}
