import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const NavDropdown = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-600 hover:text-secondary focus:outline-none data-[state=open]:text-secondary">
        About <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[220px]">
        <DropdownMenuItem onSelect={() => navigate("/about")}>About</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => navigate("/provider/doreen")}>Provider</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
