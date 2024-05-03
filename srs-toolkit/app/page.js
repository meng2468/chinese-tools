import SentenceCreator from "./sentence";

export default function Home() {
  return (
    <main >
      <div class="bg-gray-100 text-gray-800 py-3 px-2 shadow-sm">
        <div class="container mx-2">
          <h1 class="text-lg font-semibold">Chinese Anki - An awesome learning tool</h1>
        </div>
      </div>
      <div class="container mx-2 mt-4">
        <p>Welcome to Chinese Anki, your personal learning assistant for mastering Chinese language.</p>
      </div>
      <div>
        <SentenceCreator />
      </div>
    </main>
  );
}
