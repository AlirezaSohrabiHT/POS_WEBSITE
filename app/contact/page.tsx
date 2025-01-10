export default function ContactPage() {
    return (
      <div className="flex items-center justify-center h-screen bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">تماس با ما</h1>
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center flex-row-reverse justify-between">
              <span className="text-lg">مهرداد گنجی</span>
              <span className="text-lg">09358999831</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  