import React, { useEffect } from "react";

import { MovieSection } from "../features/movieSection/MovieSection";

export function MoviePage() {
  return (
    <main>
      <MovieSection provider={"cinemaworld"} title={"Cinema World Film"} />
      <MovieSection provider={"filmworld"} title={"Film World Film"} />
    </main>
  );
}
