import Head from "next/head";
import { Inter } from "@next/font/google";
import { DefaultLayout } from "@/components/_layouts";
import SidebarButton from "@/components/Sidebar";
import { Text } from "@chakra-ui/react";
import TaskBox from "@/components/Taskbox";
import Greeting from "@/components/Greetings";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Um gerenciador de tarefas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <main>
          <Greeting user="Nestor" />
          <TaskBox />
        </main>
      </DefaultLayout>
    </>
  );
}
