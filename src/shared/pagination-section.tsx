import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextLast,
  PaginationPrevious,
  PaginationPreviousLast,
} from "../components/pagination";

type TPaginationSectionProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: TPaginationSectionProps) {
  const pageCount =
    Number.isFinite(totalPosts) && Number.isFinite(postsPerPage) && postsPerPage > 0
      ? Math.max(0, Math.ceil(totalPosts / postsPerPage))
      : 0;
  const page = Number.isFinite(currentPage)
    ? Math.min(Math.max(1, Math.floor(currentPage)), Math.max(1, pageCount))
    : 1;

  const maxPageNum = 2; // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible

  const firstPage = Math.max(1, page - pageNumLimit);
  const lastPage = Math.min(pageCount, page + pageNumLimit);
  const activePages = Array.from(
    { length: Math.max(0, lastPage - firstPage + 1) },
    (_, index) => firstPage + index,
  );

  const handleNextPage = () => {
    if (page < pageCount) {
      setCurrentPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  };

  const handlePrevPageLast = () => {
    if (page > 1) {
      setCurrentPage(1);
    }
  };

  const handleNextPageLast = () => {
    if (page < pageCount) {
      setCurrentPage(pageCount);
    }
  };

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((pageNumber) => (
      <PaginationItem
        key={pageNumber}
      >
        <PaginationLink isActive={page === pageNumber} onClick={() => setCurrentPage(pageNumber)} size={undefined}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageCount) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };

  return (
    <div className="p-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPreviousLast
              onClick={handlePrevPageLast}
              size={undefined}
            />
            <PaginationPrevious onClick={handlePrevPage} size={undefined} />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext onClick={handleNextPage} size={undefined} />
            <PaginationNextLast onClick={handleNextPageLast} size={undefined} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export { PaginationSection };
