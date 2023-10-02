"use client";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Image,
  Progress,
  Spinner,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import FileUploader from "./file-uploader";
import { useState } from "react";

export default function MainForm() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 20));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="w-8/12 p-10">
      <CardBody>
        <div className="grid place-items-center mb-10">
          <Image width={"full"} alt="NextUI hero Image" src="/wellx.png" />
        </div>
        <Input type="text" label="Required Skill" />
        <Input type="text" className="mt-2" label="Additional Skill" />
        <Select
          label="Years of Experience"
          placeholder="Minimum years of experience"
          className="max-full mt-2 light"
        >
          <SelectItem key="0" value="0" className="dark text-black">
            0 - 2 Years
          </SelectItem>
          <SelectItem key="1" value="1" className="dark text-black">
            3-5 Years
          </SelectItem>
          <SelectItem key="2" value="2" className="dark text-black">
            &gt;5 Years
          </SelectItem>
        </Select>

        <FileUploader />

        <Button
          color="primary"
          className="mt-5 hover:bg-primary-600"
          onClick={submitForm}
        >
          {isLoading ? (
            <span className="flex items-center">
              <Spinner color="default" size="sm" className="mr-2" />
              Processing
            </span>
          ) : (
            "Submit"
          )}
        </Button>
        {isLoading && (
          <Progress
            aria-label="Processing..."
            size="md"
            value={value}
            color="success"
            showValueLabel={false}
            className="max-w-full mt-2"
          />
        )}
      </CardBody>
    </Card>
  );
}
