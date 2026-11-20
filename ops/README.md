# Existing-image Coolify deployment

The existing VPS runner remains the single source build trigger. After its successful image build, the shared VPS deploy script dispatches this helper only for an explicitly registered migrated service. It must not also run the legacy Compose up command.

The helper runs inside the existing Coolify container with TARGET_SERVICE_UUID set to the matching managed service. No API token or additional SSH key is needed. Public traffic continues through the existing Cloudflare tunnel and original Docker network alias. Databases and sidecars remain unchanged.

Keep the previous image, stopped container and Compose configuration for rollback. Disable the managed application before restarting the legacy container. A failed deployment must not silently leave two deployment owners active.

The daily article workflow remains unchanged; it does not start another VPS container. No second Coolify Git webhook or scheduled task is added.
