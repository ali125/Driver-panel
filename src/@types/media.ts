export type UploadMediaResponse = {
  action: boolean;
  data: {
    action: boolean;
    items: {
      input_name: string;
      language_id: number;
      type: string;
      wstoken: string;
      extension: string;
      src: string;
      destination: string;
      size: number;
    };
    message: string;
  };
  message: string;
  result_items: {
    input_name: string;
    language_id: number;
    type: string;
    wstoken: string;
    extension: string;
    src: string;
    destination: string;
    size: number;
  };
  guest_token: string;
  has_redirect: boolean;
};

export type SaveContractDocsResponse = {
  id: number;
  model_id: number;
  model_type: string;
  instance_id: number;
  category_id: string | null;
  customer_user_id: number;
  contract_type_id: string | null;
  contract_number: string;
  parent_id: string | null;
  title: string;
  short_description: string | null;
  description: string;
  start_date: string;
  end_date: string;
  prep_date: string;
  control_date: string;
  execution_date: string | null;
  guarantee_amount: string | null;
  guarantee_number: string | null;
  guarantee_date: string | null;
  guarantee_description: string | null;
  good_job_amount: string | null;
  monitoring_description: string | null;
  user_id: number;
  params: string;
  hash_file: string | null;
  active: number;
  online_status: number;
  owner_id: string | null;
  customer_notification: string | null;
  sale_notification: number;
  finance_notification: string | null;
  state: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};
