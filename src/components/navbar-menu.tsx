"use client";
import { useState } from "react";

import { Calendar, Clock, Menu, Plus, X } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Menu
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
              isOpen ? "-rotate-90 scale-0" : ""
            )}
          />
          <X
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all",
              isOpen ? "rotate-0 scale-100" : ""
            )}
          />
          <span className="sr-only">Toggle nav menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setIsOpen(false)}>
          <Link href="/" className="flex gap-2 items-center">
            <Clock /> Today
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setIsOpen(false)}>
          <Link href="/calendar" className="flex gap-2 items-center">
            <Calendar /> Calendar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setIsOpen(false)}>
          <Link href="/new" className="flex gap-2 items-center">
            <Plus /> New
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
