export type ContractItem = {
  id: number;
  contract_number: string;
  title: string;
  start_date: string;
  end_date: string;
  params_array: {
    father_name: string;
    national_code: string;
    birth_date: string;
    birth_city: string | null;
    cart_number: string;
    sheba_number_bank: string;
    bank_account_number: string;
    bank_name: string | null;
    company_national_code: string | null;
    register_code: string | null;
    economic_code: string | null;
    postal_code: string | null;
    phone: string;
    mobile: string;
    email: string;
    address_user: string;
    address_user_work: string | null;
    car_wash_payable: string;
    gaz_payable_by_liter: string;
    allow_kilometer: string;
    warranty_amount: string;
    percent_late_fees_by_hour: string;
    deposit: string;
    car_kilometer: string;
    car_kilometer_back: string;
    financial_responsibility_basic: string;
    financial_responsibility_medium: string;
    financial_responsibility_premium: string;
    next_oil_change: string;
    insurance_cost_medium: string;
    insurance_cost_premium: string;
    location_pick_up: string;
    location_return: string;
    pickup_transfer_cost: string;
    return_transfer_cost: string;
    pickup_transfer_address: string | null;
    return_transfer_address: string | null;
    gaz_progress: string | null;
    existing_damage: string | null;
    signature_owner: string | null;
    signature_renter: string | null;
    attach_file: string | null;
    person_marketer: string;
    person_pickup: string;
    person_return: string | null;
    discount_items: {
      discount: string;
      model_type: string;
      model_id: string;
      qty: string;
      currency_id: string;
      description: string | null;
    };
    cheque_number: string | null;
    cheque_amount: string | null;
    cheque_date: string | null;
    cheque_bank: string | null;
    cheque_branch: string | null;
    cheque_branch_code: string | null;
    cheque_register_code: string | null;
    promissory_count: string | null;
    promissory_unit_amount: string;
    promissory_number: string;
    promissory_total_amount: string;
    promissory_count_2: string | null;
    promissory_unit_amount_2: string;
    promissory_number_2: string;
    promissory_total_amount_2: string;
    promissory_count_3: string | null;
    promissory_unit_amount_3: string;
    promissory_number_3: string;
    promissory_total_amount_3: string;
    currency_id: string;
    days: number;
    order_id: number;
    reference_code: string;
    amount: number;
    payable_amount: number;
    discount: number;
    owner_price_rent: {
      currency: string;
      qty: string;
      price: string;
      description: string | null;
    };
    owner_price_kilometer: {
      currency: string;
      qty: string;
      price: string;
      description: string | null;
    };
    owner_price_surplus: {
      currency: string;
      qty: string;
      price: string | null;
      description: string | null;
    };
    owner_transfer_pickup: {
      currency: string;
      price: string | null;
      date: string | null;
      description: string | null;
    };
    owner_transfer_return: {
      currency: string;
      price: string | null;
      date: string | null;
      description: string | null;
    };
    description_acquaintance: string | null;
    have_technical_problem: string | null;
    user_document_1: string;
    document_visa: string;
    user_document_2: string;
    document_passport: string;
    customer_accept_code_notify: number;
    personal_link_form_checklist_notify: number;
    customer_invoice_notification: number;
    customer_welcome_notification: number;
    car_real_mileage_back: string | null;
    car_kilometer_surplus: string | null;
    car_kilometer_allowed: string | null;
    person_pickup_notify: number;
  };
  start_date_shamsi: string;
  end_date_shamsi: string;
  customer: {
    id: number;
    instance_id: number;
    username: string;
    first_name: string;
    last_name: string;
    father_name: string;
    national_code: string;
    birthday: string;
    country_id: string | null;
    state_id: string | null;
    city_id: string | null;
    gender: string | null;
    marital: string | null;
    avatar_confirm: 0;
    confirm: 1;
    full_name: string;
    birthday_by_format: string;
    small_avatar_url: string;
  };
  contract_information: {
    id: number;
    title: string;
    description: string | null;
  }[];
};
