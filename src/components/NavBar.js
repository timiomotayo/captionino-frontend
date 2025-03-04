"use client";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "./Avatar";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function NavBar() {
    const { user, signOut } = useAuth();

    return (
      <div className="top-navbar">
        <div className="nav-info">
          <Link href="/profile">
            <h3 className="user-info" style={{ display: user?.email ? 'block' : 'none' }}>{user?.email}</h3>
          </Link>
        </div>
        <div className="navbar-group">
          <Link href="/dashboard"><h1 className="header-text">Captionino</h1></Link>
          <div className="navbar">
            <div className="navbar-left">
              <Image src="/my_logo-bg.ico" className="app-logo" alt="app logo"/>
            </div>
            <div className="navbar-right">
              <Link href="/profile"><Avatar src={user?.user_metadata.avatar_url || "/default-avatar.jpg"} alt="User Avatar" /></Link>
              <Button className={"logout-btn"} onClick={signOut} variant="outline" style={{ display: user?.email ? 'block' : 'none' }}>Logout</Button>
            </div>
          </div>
        </div>
      </div>
    );
  } 