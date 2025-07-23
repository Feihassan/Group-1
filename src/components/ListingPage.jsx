import ApartmentCard from "./ApartmentCard";

function ListingPage({ apartments, onBook }) {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {apartments.map(apartment => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          onBook={onBook}
        />
      ))}
    </div>
  );
}

export default ListingPage;
