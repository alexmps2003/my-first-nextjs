export type Revenue = {
  month: string;
  revenue: number;
};

// User shape mirrors the users table
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
};

export type LatestInvoiceRaw = LatestInvoice;

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};
export type CustomerField = {
  id: string;
  name: string;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};
