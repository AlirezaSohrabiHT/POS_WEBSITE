"use client";

import React from "react";
import { FaInstagram, FaPhoneAlt, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text px-6 pt-12 pb-6 border-t border-light-secondary dark:border-dark-secondary">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center md:items-start text-center md:text-right"
        style={{ direction: "rtl" }}
      >
        {/* Brand Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">اکسیر POS</h3>
          <p className="text-sm opacity-80 leading-6">
            سیستم هوشمند و پیشرفته برای مدیریت فروش در کافه، رستوران، سوپرمارکت و فروشگاه‌های مختلف.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">لینک‌های مفید</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">درباره ما</a></li>
            <li><a href="/contact" className="hover:underline">تماس با ما</a></li>
            <li><a href="/faq" className="hover:underline">سؤالات متداول</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">ارتباط با ما</h4>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-light-accent dark:hover:text-dark-accent"><FaInstagram /></a>
            <a href="https://t.me" target="_blank" className="hover:text-light-accent dark:hover:text-dark-accent"><FaTelegram /></a>
            <a href="tel:+989358999831" className="hover:text-light-accent dark:hover:text-dark-accent"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-sm opacity-70 border-t border-light-secondary dark:border-dark-secondary pt-4">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است - Exir POS
      </div>
    </footer>
  );
};

export default Footer;
