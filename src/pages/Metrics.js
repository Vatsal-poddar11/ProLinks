import React, { useState } from 'react';

const Metrics = () => {
  const [username, setUsername] = useState('');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null);
    setStats(null);

    const apiUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate the solved percentage safely
  const getPercentage = (solved, total) =>
    total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="flex flex-col items-center mt-6 p-4">
      <h1 className="text-4xl font-bold text-gold mb-6">
        LeetCode Stats
      </h1>

      {/* Input Form */}
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 w-full max-w-[400px] flex flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-sm text-lightCyan">
            LeetCode Username <sup className="text-tomato">*</sup>
          </p>
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={handleOnChange}
            placeholder="Enter LeetCode username"
            className="w-full rounded-md p-3 bg-darkSlateGray text-lightCyan border focus:outline-none focus:ring-2 border-steelBlue"
          />
        </label>

        <button
          type="submit"
          className="mt-6 py-2 px-4 rounded-lg font-semibold bg-darkSeaGreen text-black shadow-lg hover:bg-steelBlue transition-all"
        >
          Fetch Stats
        </button>
      </form>

      {/* Loading/Error/Results */}
      {loading && <div className="mt-4 text-xl text-gold">Loading...</div>}
      {error && <div className="mt-4 text-xl text-tomato">Error: {error}</div>}
      {stats && (
        <div className="mt-8 w-full max-w-2xl p-6 rounded-lg bg-darkSlateGray text-lightCyan shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gold">
            Stats for {username}
          </h2>

          {/* Stats Circles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            {/* Easy Problems */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full bg-darkSlateGray shadow-lg">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#FFD700 ${getPercentage(
                      stats.easySolved,
                      stats.totalEasy
                    )}%, #2F4F4F 0%)`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-lightCyan text-center">
                    <p className="font-bold text-lg">
                      {stats.easySolved} / {stats.totalEasy}
                    </p>
                    <p className="text-sm">Easy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Problems */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full bg-darkSlateGray shadow-lg">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#FFD700 ${getPercentage(
                      stats.mediumSolved,
                      stats.totalMedium
                    )}%, #2F4F4F 0%)`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-lightCyan text-center">
                    <p className="font-bold text-lg">
                      {stats.mediumSolved} / {stats.totalMedium}
                    </p>
                    <p className="text-sm">Medium</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hard Problems */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full bg-darkSlateGray shadow-lg">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#FFD700 ${getPercentage(
                      stats.hardSolved,
                      stats.totalHard
                    )}%, #2F4F4F 0%)`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-lightCyan text-center">
                    <p className="font-bold text-lg">
                      {stats.hardSolved} / {stats.totalHard}
                    </p>
                    <p className="text-sm">Hard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Metrics;
