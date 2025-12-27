export default function TrustBar() {
  return (
    <section className="bg-sectionTint py-10">
      <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-textSecondary">
        <div>
          <p className="font-semibold text-textPrimary">
            Freshly Prepared
          </p>
          <p>Cut every morning</p>
        </div>

        <div>
          <p className="font-semibold text-textPrimary">
            Hygienic Packing
          </p>
          <p>Handled with care</p>
        </div>

        <div>
          <p className="font-semibold text-textPrimary">
            No Preservatives
          </p>
          <p>100% natural</p>
        </div>

        <div>
          <p className="font-semibold text-textPrimary">
            Cancel Anytime
          </p>
          <p>No lock-in</p>
        </div>
      </div>
    </section>
  );
}
