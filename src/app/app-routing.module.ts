import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditComponentComponent } from "./edit-component/edit-component.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponentComponent },
  { path: "edit", component: EditComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
