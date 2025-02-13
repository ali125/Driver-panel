import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input } from "antd";
import Description from "@/components/common/Description";
import Section from "@/components/common/Section";
import Title from "@/components/common/Title";
import useUser from "@/hooks/useUser";
import Loading from "@/app/loading";

type FieldType = {
  currentPassword?: string;
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const user = useUser();

  if (user.loading) return <Loading />;

  const onFinish: FormProps<FieldType>["onFinish"] = async ({
    currentPassword,
    password,
  }) => {
    console.log({
      currentPassword,
      password,
    });
    // user.updateUserPassword(currentPassword ?? "", password);
  };
  return (
    <Section className="bg-red- mb-10">
      <Title>ویرایش رمزعبور</Title>
      <Description>
        درصورتی که ارپیش رمزعبوری تعیین نکرده اید،‌فیلد &quot;رمزعبور&quot; را
        خالی بگذارید.
      </Description>

      <Form
        className="mt-6 flex flex-wrap gap-0 sm:gap-8 sm:gap-y-11"
        name="changePassword"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <LockOutlined />
              رمزعبور
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] lg:min-w-80"
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "لطفا رمزعبور خود را وارد کنید",
            },
          ]}
        >
          <Input.Password
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا رمزعبور خود را وارد کنید"
            id="currentPassword"
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <LockOutlined />
              رمزعبور جدید
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] lg:min-w-80"
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمزعبور جدید خود را وارد کنید",
            },
            { min: 5, message: "رمزعبور باید حداقل 5 کاراکتر باشد" },
            { max: 30, message: "رمزعبور باید حداکثر 30 کاراکتر باشد" },
          ]}
        >
          <Input.Password
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا رمزعبور جدید خود را وارد کنید"
            id="password"
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label={
            <span className="flex items-center gap-2 text-lg font-medium">
              <LockOutlined />
              تکرار رمزعبور جدید
            </span>
          }
          className="w-full max-w-full md:w-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] lg:min-w-80"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "لطفا تکرار رمزعبور جدید خود را وارد کنید",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("تکرار رمزعبور تطابق ندارد!!"));
              },
            }),
          ]}
        >
          <Input.Password
            className="w-full rounded-xl border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold"
            placeholder="لطفا تکرار رمزعبور جدید خود را وارد کنید"
            id="confirmPassword"
          />
        </Form.Item>
        <Button
          type="primary"
          shape="default"
          size="large"
          className="mt-6 w-full font-bold"
          htmlType="submit"
        >
          ویرایش رمزعبور
        </Button>
      </Form>
    </Section>
  );
};

export default ChangePassword;
