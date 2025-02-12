"use client";
import React, { useEffect } from "react";
import { useRouter } from "nextjs-toploader/app";
import { useSearchParams } from "next/navigation";

import { UnlockOutlined } from "@ant-design/icons";
import { Button, FormProps, Input } from "antd";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/requests/auth";
import toast from "react-hot-toast";
import { TOKEN_STORE } from "@/constants";
import { handlePhoneNumber, phoneFarsiPattern } from "@/utils/helper";

type PasswordFieldType = {
  connector: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const loginRequestMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: async (data) => {
      if (data?.action && data.data) {
        localStorage.setItem(TOKEN_STORE, data.data.token);
        toast.success("شما با موفقیت وارد شدید. درحال انتقال به پنل...");
        router.push(searchParams.get("redirectToPath") ?? "/panel");
      } else {
        toast.error(data.message);
      }
    },
  });

  const onFinish: FormProps<PasswordFieldType>["onFinish"] = async ({
    connector,
    password,
  }) => {
    loginRequestMutation.mutate({
      connector: handlePhoneNumber(connector),
      password,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORE);
    if (token) router.replace("/panel");
  }, [router]);

  return (
    <section className="flex w-fit max-w-sm flex-col items-center justify-center py-2">
      <Form name="passwordForm" onFinish={onFinish}>
        <FormItem
          label={
            <div className="flex justify-center">
              <UnlockOutlined className="ml-1" />
              شماره موبایل
            </div>
          }
          name="connector"
          rules={[
            {
              required: true,
              message: "لطفا شماره تان را وارد کنید!",
            },
            {
              // pattern: new RegExp("^\\d{10}$"),
              pattern: phoneFarsiPattern,
              message: "لطفا شماره صحیح وارد کنید",
            },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div dir="ltr">
            <Input placeholder="09123456789" type="tel" autoFocus />
          </div>
        </FormItem>
        <FormItem
          label={
            <div className="flex justify-center">
              <UnlockOutlined className="ml-1" />
              رمز عبور
            </div>
          }
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمزتان را وارد کنید!",
            },
            {
              min: 5,
              message: "رمز کوتاه است",
            },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div dir="ltr">
            <Input placeholder="******" type="password" />
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            ورود
          </Button>
        </FormItem>
      </Form>
    </section>
  );
};

export default Login;
