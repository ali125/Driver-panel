"use client";
import React from "react";
import { SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input } from "antd";
import Description from "@/components/common/Description";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import useUser from "@/hooks/useUser";
import Loading from "@/app/loading";
import { meliCodeFarsiPattern } from "@/utils/helper";

type FieldType = {
  first_name?: string;
  last_name?: string;
  gender?: string;
  father_name?: string;
  national_code?: string;
};

const Profile = () => {
  const user = useUser();

  if (!user.data) return <Loading />;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // user.updateUserInfo({
    //   ...values,
    //   email: values.email || undefined,
    // });
  };

  const { first_name, last_name, father_name, gender, national_code } =
    user.data;
  return (
    <Section className="mb-10">
      <Title>تنظیمات حساب کاربری</Title>
      <Description>
        لطفا اطلاعات کاربری خود را تکمیل کنید و یا درصورت اشتباه بودن،‌آن را
        ویرایش کنید.
      </Description>

      <Form
        className="mt-6 flex flex-wrap gap-0 sm:gap-8 sm:gap-y-11"
        name="profile"
        initialValues={{
          first_name,
          last_name,
          father_name,
          gender,
          national_code,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <UserOutlined />
              نام
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.3%-1.5rem)] lg:min-w-80"
          rules={[
            {
              required: true,
              message: "لطفا نام خود را وارد کنید",
            },
            {
              min: 3,
              message: "نام باید حداقل ۳ کاراکتر باشد",
            },
            {
              pattern: /^[^;]*$/,
              message: "نام نباید شامل ';' باشد",
            },
          ]}
          name="first_name"
        >
          <Input
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا نام خود را وارد کنید"
            id="first_name"
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <UserOutlined />
              نام خانوادگی
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.3%-1.5rem)] lg:min-w-80"
          rules={[
            {
              required: true,
              message: "لطفا نام خانوادگی خود را وارد کنید",
            },
            {
              min: 3,
              message: "نام خانوادگی باید حداقل ۳ کاراکتر باشد",
            },
            {
              pattern: /^[^;]*$/,
              message: "نام خانوادگی نباید شامل ';' باشد",
            },
          ]}
          name="last_name"
        >
          <Input
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا نام خانوادگی خود را وارد کنید"
            id="last_name"
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <UserOutlined />
              نام پدر
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.3%-1.5rem)] lg:min-w-80"
          name="father_name"
        >
          <Input
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا نام پدر خود را وارد کنید"
            id="father_name"
          />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <SolutionOutlined />
              کدملی
            </span>
          }
          rules={[
            {
              pattern: meliCodeFarsiPattern,
              message: "فرمت کدملی معتبر نیست",
            },
          ]}
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.3%-1.5rem)] lg:min-w-80"
          name="national_code"
        >
          <Input
            type="tel"
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا کدملی خود را وارد کنید"
            id="national_code"
          />
        </Form.Item>

        <Form.Item className="w-full">
          <Button
            type="primary"
            shape="default"
            size="large"
            className="mt-6 w-full font-bold"
            htmlType="submit"
          >
            ویرایش حساب کاربری
          </Button>
        </Form.Item>
      </Form>
    </Section>
  );
};

export default Profile;
