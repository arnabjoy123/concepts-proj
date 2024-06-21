import { useCallback, useEffect, useRef, useState } from "react";

function Pass() {
  const [pass, setPass] = useState(null);
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);

  const passwordRef = useRef(null);

  const generate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (char) str += "!@#$%^&*()_+";
    if (num) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, char, num]);

  useEffect(() => {
    generate();
  }, [length, char, num]);

  function copy() {
    navigator.clipboard.writeText(pass);
    passwordRef.current?.select();
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100  dark:bg-gray-800">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <input
          type="text"
          value={pass}
          className="border w-full p-2 mb-4 text-center rounded"
          readOnly
          ref={passwordRef}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={copy}
        >
          Copy
        </button>
        <div className="mb-4">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
          <label className="block text-gray-700 text-sm font-bold mt-2">
            Length: {length}
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="numbers"
            onChange={() => setNum((prev) => !prev)}
            className="mr-2 leading-tight"
          />
          <label htmlFor="numbers" className="text-gray-700 text-sm">
            Numbers
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="characters"
            onChange={() => setChar((prev) => !prev)}
            className="mr-2 leading-tight"
          />
          <label htmlFor="characters" className="text-gray-700 text-sm">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default Pass;
