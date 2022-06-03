import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import SourcePage from './pages/SourcePage/SourcePage';

// import { saveAs } from "file-saver";
// import { Packer } from "docx";
// import { DocumentCreator } from "./generator";
// import Selector from "./Components/Selector/Selector";
// import ButtonsAddDelete from "./Components/CommonComponents/ButtonsAddDelete/ButtonsAddDelete";

const queryClient = new QueryClient()

export default function App() {
  // const generate = () => {
  //   const documentCreator = new DocumentCreator();
  //   const doc = documentCreator.create();

  //   Packer.toBlob(doc).then(blob => {
  //     saveAs(blob, "example.docx");
  //     console.log("Document created successfully");
  //   });
  // }

  // return (
  //   <div className="conteiner">
  //     {
  //       store.state.map(state => <Selector state={state} dispatch={store.dispatch.bind(store)} check={store.state.length > 1} />)
  //     }
  //     <ButtonsAddDelete dispatch={store.dispatch.bind(store)}
  //       check={store.state.length > 1}
  //       type='STATE' />
  //     <br />
  //     <button onClick={generate}>Сформировать документ</button>
  //   </div>
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <SourcePage />
    </QueryClientProvider>
  )
}
