/**
 * Trigger a site rebuild when pages are published/unpublished
 * Supports GitHub Actions webhook (recommended for free tier)
 * Can also be adapted for Netlify Build Hooks
 */

export async function triggerRebuild(): Promise<void> {
  // GitHub Actions Workflow Dispatch
  // Requires: GITHUB_TOKEN with repo access
  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo = process.env.GITHUB_REPO || 'Burhan-sheikh/kash-pages';
  const workflowFile = 'deploy.yml';

  if (!githubToken) {
    console.warn('GITHUB_TOKEN not set, rebuild not triggered');
    return;
  }

  try {
    const [owner, repo] = githubRepo.split('/');
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowFile}/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: 'main',
          inputs: {
            trigger: 'page_published',
            timestamp: new Date().toISOString(),
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub Actions API error: ${response.status} ${response.statusText}`
      );
    }

    console.log('Build triggered successfully via GitHub Actions');
  } catch (error) {
    console.error('Failed to trigger rebuild:', error);
    // Don't throw - rebuild failure shouldn't block the operation
  }
}

/**
 * Alternative: Netlify Build Hook
 * Create a build hook in Netlify dashboard and store URL in NETLIFY_BUILD_HOOK_URL
 */
export async function triggerNetlifyRebuild(): Promise<void> {
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;

  if (!buildHookUrl) {
    console.warn('NETLIFY_BUILD_HOOK_URL not set');
    return;
  }

  try {
    const response = await fetch(buildHookUrl, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(
        `Netlify API error: ${response.status} ${response.statusText}`
      );
    }

    console.log('Build triggered successfully via Netlify');
  } catch (error) {
    console.error('Failed to trigger Netlify rebuild:', error);
  }
}
