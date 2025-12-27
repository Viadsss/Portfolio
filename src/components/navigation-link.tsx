import { cn } from "@/lib/utils";
import { NavLink, type NavLinkProps } from "react-router";
import { buttonVariants } from "./ui/button";
import { type VariantProps } from "class-variance-authority";

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface NavigationLinkProps extends Omit<NavLinkProps, "className"> {
  activeVariant?: ButtonVariants["variant"];
  inactiveVariant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  className?: string;
}

export function NavigationLink({
  children,
  activeVariant = "secondary",
  inactiveVariant = "link",
  size = "default",
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? activeVariant : inactiveVariant,
            size,
          }),
          !isActive && "opacity-70 hover:opacity-100",
          className
        )
      }
      {...props}
      viewTransition
    >
      {children}
    </NavLink>
  );
}
