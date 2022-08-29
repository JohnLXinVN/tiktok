//Layouts 
import { HeaderOnly } from '~/components/Layout'


//page
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },

]

//Nếu không đăng nhập thì vẫn xem được đó là publicRoutes 
//Phải đăng nhập thì mới xem được là privateRoutes nếu mà chưa đăng nhập thì nó sẽ lái sang trang login

const privateRoutes = [


]

export { publicRoutes, privateRoutes } 