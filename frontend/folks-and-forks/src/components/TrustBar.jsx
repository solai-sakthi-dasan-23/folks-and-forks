export default function TrustBar() {
  return (
    <section className="bg-brandGreenSoft py-16">
      <div className="section">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-center text-textPrimary">
            Why People Trust Folks & Forks
          </h3>

          <p className="text-center text-textSecondary mt-2 max-w-xl mx-auto">
            Simple habits. Clean food. Honest nutrition.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="text-center px-4">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-brandGreenSoft flex items-center justify-center">
                🥗
              </div>
              <p className="font-medium">Freshly Prepared</p>
              <p className="text-sm text-textSecondary">
                Cut every morning
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-brandGreenSoft flex items-center justify-center">
                🧼
              </div>
              <p className="font-medium">Hygienic Packing</p>
              <p className="text-sm text-textSecondary">
                Handled with care
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-brandGreenSoft flex items-center justify-center">
                🌿
              </div>
              <p className="font-medium">No Preservatives</p>
              <p className="text-sm text-textSecondary">
                100% natural
              </p>
            </div>

            <div className="text-center px-4">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-brandGreenSoft flex items-center justify-center">
                🔄
              </div>
              <p className="font-medium">Cancel Anytime</p>
              <p className="text-sm text-textSecondary">
                No lock-in
              </p>
            </div>
          </div>

          {/* CTA bridge */}
          <div className="mt-12 text-center">
            <p className="text-textSecondary mb-4">
              See what goes into your daily Nutri Box
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contents")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="primary-btn px-10"
            >
              What’s Inside the Nutri Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
