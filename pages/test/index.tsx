import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TestPage from "../../components/pages/TestPage";
import commentModel from "../../models/commentModel";
import connectMongo from "../../lib/mongodb";

export const getServerSideProps: any = async () => {
  try {
    await connectMongo();

    const response = await commentModel.find().limit(1);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(response);
    console.log(process.env.MONGODB_URI);

    return {
      props: {
        test: response[0].name,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: "oh",
  };
};

interface Props {
  test: string;
}

const index: NextPage<Props> = ({ test }) => {
  return <TestPage test={test} />;
};

export default index;
