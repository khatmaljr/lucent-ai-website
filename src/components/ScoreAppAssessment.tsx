typescript 
import { useEffect } from 'react';

export default function ScoreAppAssessment() {
  useEffect(() => {
    // Load ScoreApp script
    const script = document.createElement('script');
    script.src = 'https://static.scoreapp.com/js/integration/v1/embedding.js?v=NU3KKT';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        data-sa-url="https://d6cff53d-c15d-440c-9bc0-ccb05499a0fb.scoreapp.com/?sa_target=_top" 
        data-sa-view="inline" 
        style={{ maxWidth: '100%', width: '100%' }} 
        data-sa-auto-height="1"
      />
    </div>
  );
}
