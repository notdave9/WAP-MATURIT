import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";

import David from "./MainPage/David";
import Schejbal from "./MainPage/Schejbal";
import Pawel from "./MainPage/Pawel";
import Ondra from "./MainPage/Ondra";

import DavidView from "./View/David/DavidView";
import DavidList from "./List/David/DavidList";
import DavidCreateForm from "./CreateForm/David/DavidCreateForm";
import DavidUpdateForm from "./UpdateForm/David/DavidUpdateForm";
import CreatedDavid from "./CreateForm/David/CreatedDavid";
import DavidDeleted from "./View/David/DavidDeleted";

import SchejbalView from "./View/Schejbal/SchejbalView";
import SchejbalList from "./List/Schejbal/SchejbalList";
import SchejbalCreateForm from "./CreateForm/Schejbal/SchejbalCreateForm";
import SchejbalUpdateForm from "./UpdateForm/Schejbal/SchejbalUpdateForm";
import CreatedSchejbal from "./CreateForm/Schejbal/CreatedSchejbal";
import SchejbalDeleted from "./View/Schejbal/SchejbalDeleted";

import PawelView from "./View/Pawel/PawelView";
import PawelList from "./List/Pawel/PawelList";
import PawelCreateForm from "./CreateForm/Pawel/PawelCreateForm";
import PawelUpdateForm from "./UpdateForm/Pawel/PawelUpdateForm";
import CreatedPawel from "./CreateForm/Pawel/CreatedPawel";
import PawelDeleted from "./View/Pawel/PawelDeleted";

import OndraView from "./View/Ondra/OndraView";
import OndraList from "./List/Ondra/OndraList";
import OndraCreateForm from "./CreateForm/Ondra/OndraCreateForm";
import OndraUpdateForm from "./UpdateForm/Ondra/OndraUpdateForm";
import CreatedOndra from "./CreateForm/Ondra/CreatedOndra";
import OndraDeleted from "./View/Ondra/OndraDeleted";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route path="/" element={<MainPage />} />

        <Route path="/david" element={<David />} />
        <Route path="/david/:id" element={<DavidView />} />
        <Route path="/davids" element={<DavidList />} />
        <Route path="/createdavid" element={<DavidCreateForm />} />
        <Route path="/updatedavid/:id" element={<DavidUpdateForm />} />
        <Route path="/createddavid/:id" element={<CreatedDavid />} />
        <Route path="/deleteddavid/:id" element={<DavidDeleted />} />

        <Route path="/schejbal" element={<Schejbal />} />
        <Route path="/schejbal/:id" element={<SchejbalView />} />
        <Route path="/schejbals" element={<SchejbalList />} />
        <Route path="/createschejbal" element={<SchejbalCreateForm />} />
        <Route path="/updateschejbal/:id" element={<SchejbalUpdateForm />} />
        <Route path="/createdschejbal/:id" element={<CreatedSchejbal />} />
        <Route path="/deletedschejbal/:id" element={<SchejbalDeleted />} />

        <Route path="/pawel" element={<Pawel />} />
        <Route path="/pawel/:id" element={<PawelView />} />
        <Route path="/pawels" element={<PawelList />} />
        <Route path="/createpawel" element={<PawelCreateForm />} />
        <Route path="/updatepawel/:id" element={<PawelUpdateForm />} />
        <Route path="/createdpawel/:id" element={<CreatedPawel />} />
        <Route path="/deletedpawel/:id" element={<PawelDeleted />} />
        
        <Route path="/ondra" element={<Ondra />} />
        <Route path="/ondra/:id" element={<OndraView />} />
        <Route path="/ondras" element={<OndraList />} />
        <Route path="/createondra" element={<OndraCreateForm />} />
        <Route path="/updateondra/:id" element={<OndraUpdateForm />} />
        <Route path="/createdondra/:id" element={<CreatedOndra />} />
        <Route path="/deletedondra/:id" element={<OndraDeleted/>}/>


      </Routes>
    </BrowserRouter>
  );
}

