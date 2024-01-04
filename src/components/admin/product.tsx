import EditButton from "./buttons/edit-button";

export default function Product() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center md:w-[70%] lg:w-full">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-3xl font-semibold text-black">
              Nike Air Max 21A
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              rem amet repudiandae neque adipisci eum enim, natus illo inventore
              totam?
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5"></div>
            <div className="mt-2">
              <span className="title-font leading-relaxed  font-medium text-gray-900">
                Quantity:- 6
              </span>
            </div>
            <div className="mt-2">
              <span className="title-font leading-relaxed  font-medium text-gray-900">
                Price:- ₹47,199
              </span>
            </div>
            <div className="mt-2">
              <span className="title-font leading-relaxed  font-medium text-gray-900">
                Category:- Mobile
              </span>
            </div>
            <div className="mt-3">
              <EditButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
