import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  //   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import xLogo from "./assets/x-white.png";

// import img from "./assets/login.jpg";
import imgBottom from "./assets/login-bottom.jpg";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogHeader>
          <DialogTitle className="font-fredoka tracking-wide text-xl uppercase text-wp-gray text-center pt-2">
            Login
          </DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </DialogDescription>
        </DialogHeader>
        <div className="px-8 grid grid-cols-2 gap-4 font-fredoka">
          <button className="text-center rounded-md py-2 text-wp-gray border-2 border-wp-gray font-medium">
            Google
          </button>
          <button className="flex justify-center items-center text-center rounded-md py-1 bg-wp-gray text-wp-white border-2 border-wp-gray">
            <img src={xLogo} alt="x-logo" className="w-4 pt-[1px] mr-3" />
            <div className="mb-[0px]">Login</div>
          </button>
        </div>
        <div className="grid grid-cols-[1fr_30px_1fr] px-8 mt-6 mb-5 gap-x-2">
          <div className="h-[1px] bg-zinc-200"></div>
          <div className="h-[1px] mt-[-13px] text-center font-medium">or</div>
          <div className="h-[1px] bg-zinc-200"></div>
        </div>
        <div className="px-8 grid grid-cols-1 gap-4">
          <Input
            id="name"
            placeholder="email"
            className="font-fredoka font-medium"
          />
          <Input
            id="password"
            type="password"
            placeholder="password"
            className="font-fredoka font-medium"
          />
          <div className="bg-wp-red rounded-md py-2 text-center font-medium text-lg text-wp-white font-fredoka">
            Sign in
          </div>
          <img src={imgBottom} className="pt-12 pb-8" alt="" />
        </div>
        {/* <DialogFooter className="flex justify-center items-center w-full">
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
